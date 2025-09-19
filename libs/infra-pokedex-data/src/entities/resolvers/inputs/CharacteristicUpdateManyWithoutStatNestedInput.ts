import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicCreateManyStatInputEnvelope } from "../inputs/CharacteristicCreateManyStatInputEnvelope";
import { CharacteristicCreateOrConnectWithoutStatInput } from "../inputs/CharacteristicCreateOrConnectWithoutStatInput";
import { CharacteristicCreateWithoutStatInput } from "../inputs/CharacteristicCreateWithoutStatInput";
import { CharacteristicScalarWhereInput } from "../inputs/CharacteristicScalarWhereInput";
import { CharacteristicUpdateManyWithWhereWithoutStatInput } from "../inputs/CharacteristicUpdateManyWithWhereWithoutStatInput";
import { CharacteristicUpdateWithWhereUniqueWithoutStatInput } from "../inputs/CharacteristicUpdateWithWhereUniqueWithoutStatInput";
import { CharacteristicUpsertWithWhereUniqueWithoutStatInput } from "../inputs/CharacteristicUpsertWithWhereUniqueWithoutStatInput";
import { CharacteristicWhereUniqueInput } from "../inputs/CharacteristicWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicUpdateManyWithoutStatNestedInput", {})
export class CharacteristicUpdateManyWithoutStatNestedInput {
  @TypeGraphQL.Field(_type => [CharacteristicCreateWithoutStatInput], {
    nullable: true
  })
  create?: CharacteristicCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: CharacteristicCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicUpsertWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  upsert?: CharacteristicUpsertWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => CharacteristicCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: CharacteristicCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicWhereUniqueInput], {
    nullable: true
  })
  set?: CharacteristicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CharacteristicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicWhereUniqueInput], {
    nullable: true
  })
  delete?: CharacteristicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicWhereUniqueInput], {
    nullable: true
  })
  connect?: CharacteristicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicUpdateWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  update?: CharacteristicUpdateWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicUpdateManyWithWhereWithoutStatInput], {
    nullable: true
  })
  updateMany?: CharacteristicUpdateManyWithWhereWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CharacteristicScalarWhereInput[] | undefined;
}
