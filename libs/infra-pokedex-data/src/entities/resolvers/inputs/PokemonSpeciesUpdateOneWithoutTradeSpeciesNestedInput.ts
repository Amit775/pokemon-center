import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput";
import { PokemonSpeciesCreateWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesCreateWithoutTradeSpeciesInput";
import { PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput";
import { PokemonSpeciesUpsertWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesUpsertWithoutTradeSpeciesInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput", {})
export class PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutTradeSpeciesInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutTradeSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpsertWithoutTradeSpeciesInput, {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithoutTradeSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  disconnect?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  delete?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput, {
    nullable: true
  })
  update?: PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput | undefined;
}
