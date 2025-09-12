import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationsCreateManyInput } from "../../../inputs/PokemonFormGenerationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateManyInput], {
    nullable: false
  })
  data!: PokemonFormGenerationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
