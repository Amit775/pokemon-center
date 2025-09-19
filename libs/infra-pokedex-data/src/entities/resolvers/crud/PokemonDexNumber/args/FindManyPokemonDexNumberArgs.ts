import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberOrderByWithRelationInput } from "../../../inputs/PokemonDexNumberOrderByWithRelationInput";
import { PokemonDexNumberWhereInput } from "../../../inputs/PokemonDexNumberWhereInput";
import { PokemonDexNumberWhereUniqueInput } from "../../../inputs/PokemonDexNumberWhereUniqueInput";
import { PokemonDexNumberScalarFieldEnum } from "../../../../enums/PokemonDexNumberScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereInput, {
    nullable: true
  })
  where?: PokemonDexNumberWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonDexNumberOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonDexNumberWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"species_id" | "pokedex_id" | "pokedex_number"> | undefined;
}
