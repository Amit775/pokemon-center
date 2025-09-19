import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryCreateInput } from "../../../inputs/MoveMetaCategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveMetaCategoryArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoryCreateInput, {
    nullable: false
  })
  data!: MoveMetaCategoryCreateInput;
}
