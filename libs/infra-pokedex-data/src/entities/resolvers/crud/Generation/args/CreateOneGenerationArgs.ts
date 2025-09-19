import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationCreateInput } from "../../../inputs/GenerationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGenerationArgs {
  @TypeGraphQL.Field(_type => GenerationCreateInput, {
    nullable: false
  })
  data!: GenerationCreateInput;
}
