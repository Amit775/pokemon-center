import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyPokemonInputEnvelope } from "../inputs/EncountersCreateManyPokemonInputEnvelope";
import { EncountersCreateOrConnectWithoutPokemonInput } from "../inputs/EncountersCreateOrConnectWithoutPokemonInput";
import { EncountersCreateWithoutPokemonInput } from "../inputs/EncountersCreateWithoutPokemonInput";
import { EncountersScalarWhereInput } from "../inputs/EncountersScalarWhereInput";
import { EncountersUpdateManyWithWhereWithoutPokemonInput } from "../inputs/EncountersUpdateManyWithWhereWithoutPokemonInput";
import { EncountersUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/EncountersUpdateWithWhereUniqueWithoutPokemonInput";
import { EncountersUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/EncountersUpsertWithWhereUniqueWithoutPokemonInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpdateManyWithoutPokemonNestedInput", {})
export class EncountersUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [EncountersCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: EncountersCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: EncountersUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: EncountersCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  set?: EncountersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncountersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  delete?: EncountersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  connect?: EncountersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: EncountersUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: EncountersUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncountersScalarWhereInput[] | undefined;
}
