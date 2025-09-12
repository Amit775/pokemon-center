import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCreateInput } from "../../../inputs/MoveMetaCreateInput";
import { MoveMetaUpdateInput } from "../../../inputs/MoveMetaUpdateInput";
import { MoveMetaWhereUniqueInput } from "../../../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveMetaArgs {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateInput, {
    nullable: false
  })
  create!: MoveMetaCreateInput;

  @TypeGraphQL.Field(_type => MoveMetaUpdateInput, {
    nullable: false
  })
  update!: MoveMetaUpdateInput;
}
