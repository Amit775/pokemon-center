import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyMoveMethodInputEnvelope } from "../inputs/PokemonMoveCreateManyMoveMethodInputEnvelope";
import { PokemonMoveCreateOrConnectWithoutMoveMethodInput } from "../inputs/PokemonMoveCreateOrConnectWithoutMoveMethodInput";
import { PokemonMoveCreateWithoutMoveMethodInput } from "../inputs/PokemonMoveCreateWithoutMoveMethodInput";
import { PokemonMoveScalarWhereInput } from "../inputs/PokemonMoveScalarWhereInput";
import { PokemonMoveUpdateManyWithWhereWithoutMoveMethodInput } from "../inputs/PokemonMoveUpdateManyWithWhereWithoutMoveMethodInput";
import { PokemonMoveUpdateWithWhereUniqueWithoutMoveMethodInput } from "../inputs/PokemonMoveUpdateWithWhereUniqueWithoutMoveMethodInput";
import { PokemonMoveUpsertWithWhereUniqueWithoutMoveMethodInput } from "../inputs/PokemonMoveUpsertWithWhereUniqueWithoutMoveMethodInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpdateManyWithoutMoveMethodNestedInput", {})
export class PokemonMoveUpdateManyWithoutMoveMethodNestedInput {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateWithoutMoveMethodInput], {
    nullable: true
  })
  create?: PokemonMoveCreateWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveCreateOrConnectWithoutMoveMethodInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMoveCreateOrConnectWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpsertWithWhereUniqueWithoutMoveMethodInput], {
    nullable: true
  })
  upsert?: PokemonMoveUpsertWithWhereUniqueWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateManyMoveMethodInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMoveCreateManyMoveMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpdateWithWhereUniqueWithoutMoveMethodInput], {
    nullable: true
  })
  update?: PokemonMoveUpdateWithWhereUniqueWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpdateManyWithWhereWithoutMoveMethodInput], {
    nullable: true
  })
  updateMany?: PokemonMoveUpdateManyWithWhereWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonMoveScalarWhereInput[] | undefined;
}
