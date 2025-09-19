import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityOrderByWithRelationInput } from "../../../inputs/PokemonAbilityOrderByWithRelationInput";
import { PokemonAbilityWhereInput } from "../../../inputs/PokemonAbilityWhereInput";
import { PokemonAbilityWhereUniqueInput } from "../../../inputs/PokemonAbilityWhereUniqueInput";
import { PokemonAbilityScalarFieldEnum } from "../../../../enums/PokemonAbilityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPokemonAbilityOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereInput, {
    nullable: true
  })
  where?: PokemonAbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonAbilityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonAbilityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_id" | "ability_id" | "is_hidden" | "slot"> | undefined;
}
