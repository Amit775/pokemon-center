import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationWhereUniqueInput } from "../../../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGenerationArgs {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;
}
