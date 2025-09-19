import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationCreateInput } from "../../../inputs/GenerationCreateInput";
import { GenerationUpdateInput } from "../../../inputs/GenerationUpdateInput";
import { GenerationWhereUniqueInput } from "../../../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGenerationArgs {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationCreateInput, {
    nullable: false
  })
  create!: GenerationCreateInput;

  @TypeGraphQL.Field(_type => GenerationUpdateInput, {
    nullable: false
  })
  update!: GenerationUpdateInput;
}
