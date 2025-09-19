import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatCreateManyInput } from "../../../inputs/PokemonStatCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonStatArgs {
  @TypeGraphQL.Field(_type => [PokemonStatCreateManyInput], {
    nullable: false
  })
  data!: PokemonStatCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
