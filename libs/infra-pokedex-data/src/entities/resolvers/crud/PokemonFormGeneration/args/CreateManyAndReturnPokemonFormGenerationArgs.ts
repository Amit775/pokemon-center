import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationCreateManyInput } from "../../../inputs/PokemonFormGenerationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonFormGenerationArgs {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateManyInput], {
    nullable: false
  })
  data!: PokemonFormGenerationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
