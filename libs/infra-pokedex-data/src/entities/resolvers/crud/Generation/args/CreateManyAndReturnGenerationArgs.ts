import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationCreateManyInput } from "../../../inputs/GenerationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnGenerationArgs {
  @TypeGraphQL.Field(_type => [GenerationCreateManyInput], {
    nullable: false
  })
  data!: GenerationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
