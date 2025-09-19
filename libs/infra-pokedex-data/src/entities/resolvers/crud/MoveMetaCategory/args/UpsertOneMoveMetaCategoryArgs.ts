import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryCreateInput } from "../../../inputs/MoveMetaCategoryCreateInput";
import { MoveMetaCategoryUpdateInput } from "../../../inputs/MoveMetaCategoryUpdateInput";
import { MoveMetaCategoryWhereUniqueInput } from "../../../inputs/MoveMetaCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveMetaCategoryArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoryCreateInput, {
    nullable: false
  })
  create!: MoveMetaCategoryCreateInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoryUpdateInput, {
    nullable: false
  })
  update!: MoveMetaCategoryUpdateInput;
}
