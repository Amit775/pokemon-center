import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateManyVersionGroupInputEnvelope } from "../inputs/PokemonFormsCreateManyVersionGroupInputEnvelope";
import { PokemonFormsCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokemonFormsCreateOrConnectWithoutVersionGroupInput";
import { PokemonFormsCreateWithoutVersionGroupInput } from "../inputs/PokemonFormsCreateWithoutVersionGroupInput";
import { PokemonFormsScalarWhereInput } from "../inputs/PokemonFormsScalarWhereInput";
import { PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput";
import { PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput";
import { PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsUpdateManyWithoutVersionGroupNestedInput", {})
export class PokemonFormsUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokemonFormsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormsScalarWhereInput[] | undefined;
}
