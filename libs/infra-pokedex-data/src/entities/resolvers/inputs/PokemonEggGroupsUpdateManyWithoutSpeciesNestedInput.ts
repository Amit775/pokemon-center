import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsCreateManySpeciesInputEnvelope } from "../inputs/PokemonEggGroupsCreateManySpeciesInputEnvelope";
import { PokemonEggGroupsCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonEggGroupsCreateOrConnectWithoutSpeciesInput";
import { PokemonEggGroupsCreateWithoutSpeciesInput } from "../inputs/PokemonEggGroupsCreateWithoutSpeciesInput";
import { PokemonEggGroupsScalarWhereInput } from "../inputs/PokemonEggGroupsScalarWhereInput";
import { PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput } from "../inputs/PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput";
import { PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput";
import { PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput";
import { PokemonEggGroupsWhereUniqueInput } from "../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput", {})
export class PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonEggGroupsCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEggGroupsCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  upsert?: PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEggGroupsCreateManySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonEggGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonEggGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonEggGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEggGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  update?: PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput], {
    nullable: true
  })
  updateMany?: PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEggGroupsScalarWhereInput[] | undefined;
}
