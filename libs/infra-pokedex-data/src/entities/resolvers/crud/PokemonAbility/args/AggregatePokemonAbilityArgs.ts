import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityOrderByWithRelationInput } from "../../../inputs/PokemonAbilityOrderByWithRelationInput";
import { PokemonAbilityWhereInput } from "../../../inputs/PokemonAbilityWhereInput";
import { PokemonAbilityWhereUniqueInput } from "../../../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonAbilityArgs {
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
}
