import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyPartySpeciesInputEnvelope } from "../inputs/PokemonEvolutionCreateManyPartySpeciesInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput";
import { PokemonEvolutionCreateWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutPartySpeciesInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutPartySpeciesInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutPartySpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyPartySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyPartySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
