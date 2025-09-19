import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveCreateInput } from "../../../inputs/MoveCreateInput";
import { MoveUpdateInput } from "../../../inputs/MoveUpdateInput";
import { MoveWhereUniqueInput } from "../../../inputs/MoveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveArgs {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateInput, {
    nullable: false
  })
  create!: MoveCreateInput;

  @TypeGraphQL.Field(_type => MoveUpdateInput, {
    nullable: false
  })
  update!: MoveUpdateInput;
}
