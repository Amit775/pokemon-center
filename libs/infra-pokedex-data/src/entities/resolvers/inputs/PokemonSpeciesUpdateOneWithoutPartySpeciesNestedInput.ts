import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput";
import { PokemonSpeciesCreateWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesCreateWithoutPartySpeciesInput";
import { PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput";
import { PokemonSpeciesUpsertWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesUpsertWithoutPartySpeciesInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput", {})
export class PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutPartySpeciesInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutPartySpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpsertWithoutPartySpeciesInput, {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithoutPartySpeciesInput | undefined;

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

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput, {
    nullable: true
  })
  update?: PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput | undefined;
}
