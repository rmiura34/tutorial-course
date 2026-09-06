# Day 01 Repository Map

## 主要ディレクトリ・ファイル（5つ以上）
- package.json — プロジェクトの基本設定や依存ライブラリが定義されているファイル
- learning-log/ — 日ごとの学習記録や成果物を保存するフォルダ
- learning-log/day-01/repository-map.md — Day 01の課題で作成したリポジトリ構造のマップ
- course/ — 教材の管理スクリプトや処理が入っているフォルダ
- training-lab/ — 実習用環境のコードが入っているフォルダ

## 実行したCommandと結果
- `git status -sb`: カレントブランチとファイルの差分状態を確認。
- `mkdir -p learning-log/day-01`: 提出用フォルダを作成。
- `cp learning-log/templates/repository-map.md learning-log/day-01/repository-map.md`: テンプレートをコピー。

## AIの誤り・未確認事項
- AIから提案された `npm run course -- show 1` コマンドは、初期の `package.json` にスクリプト定義が存在しなかったため直接実行できず不採用とした。