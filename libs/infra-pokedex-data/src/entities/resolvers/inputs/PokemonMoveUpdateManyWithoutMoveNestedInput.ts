import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyMoveInputEnvelope } from "../inputs/PokemonMoveCreateManyMoveInputEnvelope";
import { PokemonMoveCreateOrConnectWithoutMoveInput } from "../inputs/PokemonMoveCreateOrConnectWithoutMoveInput";
import { PokemonMoveCreateWithoutMoveInput } from "../inputs/PokemonMoveCreateWithoutMoveInput";
import { PokemonMoveScalarWhereInput } from "../inputs/PokemonMoveScalarWhereInput";
import { PokemonMoveUpdateManyWithWhereWithoutMoveInput } from "../inputs/PokemonMoveUpdateManyWithWhereWithoutMoveInput";
import { PokemonMoveUpdateWithWhereUniqueWithoutMoveInput } from "../inputs/PokemonMoveUpdateWithWhereUniqueWithoutMoveInput";
import { PokemonMoveUpsertWithWhereUniqueWithoutMoveInput } from "../inputs/PokemonMoveUpsertWithWhereUniqueWithoutMoveInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpdateManyWithoutMoveNestedInput", {})
export class PokemonMoveUpdateManyWithoutMoveNestedInput {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateWithoutMoveInput], {
    nullable: true
  })
  create?: PokemonMoveCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMoveCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpsertWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  upsert?: PokemonMoveUpsertWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMoveCreateManyMoveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonMoveUpdateWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  update?: PokemonMoveUpdateWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveUpdateManyWithWhereWithoutMoveInput], {
    nullable: true
  })
  updateMany?: PokemonMoveUpdateManyWithWhereWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonMoveScalarWhereInput[] | undefined;
}
