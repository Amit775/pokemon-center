import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsCreateManyEggGroupInputEnvelope } from "../inputs/PokemonEggGroupsCreateManyEggGroupInputEnvelope";
import { PokemonEggGroupsCreateOrConnectWithoutEggGroupInput } from "../inputs/PokemonEggGroupsCreateOrConnectWithoutEggGroupInput";
import { PokemonEggGroupsCreateWithoutEggGroupInput } from "../inputs/PokemonEggGroupsCreateWithoutEggGroupInput";
import { PokemonEggGroupsScalarWhereInput } from "../inputs/PokemonEggGroupsScalarWhereInput";
import { PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput } from "../inputs/PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput";
import { PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput } from "../inputs/PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput";
import { PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput } from "../inputs/PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput";
import { PokemonEggGroupsWhereUniqueInput } from "../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput", {})
export class PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateWithoutEggGroupInput], {
    nullable: true
  })
  create?: PokemonEggGroupsCreateWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateOrConnectWithoutEggGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEggGroupsCreateOrConnectWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput], {
    nullable: true
  })
  upsert?: PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsCreateManyEggGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEggGroupsCreateManyEggGroupInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput], {
    nullable: true
  })
  update?: PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput], {
    nullable: true
  })
  updateMany?: PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEggGroupsScalarWhereInput[] | undefined;
}
