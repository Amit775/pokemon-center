import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexCreateManyInput } from "../../../inputs/PokemonGameIndexCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonGameIndexArgs {
  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateManyInput], {
    nullable: false
  })
  data!: PokemonGameIndexCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
