import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationsCreateInput } from "../../../inputs/GenerationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGenerationsArgs {
  @TypeGraphQL.Field(_type => GenerationsCreateInput, {
    nullable: false
  })
  data!: GenerationsCreateInput;
}
