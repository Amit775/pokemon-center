import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumbersOrderByWithRelationInput } from "../../../inputs/PokemonDexNumbersOrderByWithRelationInput";
import { PokemonDexNumbersWhereInput } from "../../../inputs/PokemonDexNumbersWhereInput";
import { PokemonDexNumbersWhereUniqueInput } from "../../../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonDexNumbersArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereInput, {
    nullable: true
  })
  where?: PokemonDexNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonDexNumbersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonDexNumbersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
