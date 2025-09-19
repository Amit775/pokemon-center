import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryWhereUniqueInput } from "../../../inputs/MoveMetaCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveMetaCategoryArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaCategoryWhereUniqueInput;
}
