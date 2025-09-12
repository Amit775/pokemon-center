import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateManySpeciesInputEnvelope } from "../inputs/PokemonCreateManySpeciesInputEnvelope";
import { PokemonCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonCreateOrConnectWithoutSpeciesInput";
import { PokemonCreateWithoutSpeciesInput } from "../inputs/PokemonCreateWithoutSpeciesInput";
import { PokemonScalarWhereInput } from "../inputs/PokemonScalarWhereInput";
import { PokemonUpdateManyWithWhereWithoutSpeciesInput } from "../inputs/PokemonUpdateManyWithWhereWithoutSpeciesInput";
import { PokemonUpdateWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonUpdateWithWhereUniqueWithoutSpeciesInput";
import { PokemonUpsertWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonUpsertWithWhereUniqueWithoutSpeciesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateManyWithoutSpeciesNestedInput", {})
export class PokemonUpdateManyWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => [PokemonCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonUpsertWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  upsert?: PokemonUpsertWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonCreateManySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonUpdateWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  update?: PokemonUpdateWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonUpdateManyWithWhereWithoutSpeciesInput], {
    nullable: true
  })
  updateMany?: PokemonUpdateManyWithWhereWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonScalarWhereInput[] | undefined;
}
