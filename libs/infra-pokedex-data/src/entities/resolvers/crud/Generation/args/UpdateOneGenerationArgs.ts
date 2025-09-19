import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationUpdateInput } from "../../../inputs/GenerationUpdateInput";
import { GenerationWhereUniqueInput } from "../../../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGenerationArgs {
  @TypeGraphQL.Field(_type => GenerationUpdateInput, {
    nullable: false
  })
  data!: GenerationUpdateInput;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;
}
