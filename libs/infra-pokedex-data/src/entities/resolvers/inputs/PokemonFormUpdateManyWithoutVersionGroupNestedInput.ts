import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateManyVersionGroupInputEnvelope } from "../inputs/PokemonFormCreateManyVersionGroupInputEnvelope";
import { PokemonFormCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokemonFormCreateOrConnectWithoutVersionGroupInput";
import { PokemonFormCreateWithoutVersionGroupInput } from "../inputs/PokemonFormCreateWithoutVersionGroupInput";
import { PokemonFormScalarWhereInput } from "../inputs/PokemonFormScalarWhereInput";
import { PokemonFormUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/PokemonFormUpdateManyWithWhereWithoutVersionGroupInput";
import { PokemonFormUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokemonFormUpdateWithWhereUniqueWithoutVersionGroupInput";
import { PokemonFormUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokemonFormUpsertWithWhereUniqueWithoutVersionGroupInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormUpdateManyWithoutVersionGroupNestedInput", {})
export class PokemonFormUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokemonFormCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: PokemonFormUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: PokemonFormUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: PokemonFormUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormScalarWhereInput[] | undefined;
}
