import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryUpdateInput } from "../../../inputs/MoveMetaCategoryUpdateInput";
import { MoveMetaCategoryWhereUniqueInput } from "../../../inputs/MoveMetaCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveMetaCategoryArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoryUpdateInput, {
    nullable: false
  })
  data!: MoveMetaCategoryUpdateInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaCategoryWhereUniqueInput;
}
