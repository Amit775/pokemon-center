import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateManyBerryInputEnvelope } from "../inputs/BerryFlavorsCreateManyBerryInputEnvelope";
import { BerryFlavorsCreateOrConnectWithoutBerryInput } from "../inputs/BerryFlavorsCreateOrConnectWithoutBerryInput";
import { BerryFlavorsCreateWithoutBerryInput } from "../inputs/BerryFlavorsCreateWithoutBerryInput";
import { BerryFlavorsScalarWhereInput } from "../inputs/BerryFlavorsScalarWhereInput";
import { BerryFlavorsUpdateManyWithWhereWithoutBerryInput } from "../inputs/BerryFlavorsUpdateManyWithWhereWithoutBerryInput";
import { BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput } from "../inputs/BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput";
import { BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput } from "../inputs/BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateManyWithoutBerryNestedInput", {})
export class BerryFlavorsUpdateManyWithoutBerryNestedInput {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateWithoutBerryInput], {
    nullable: true
  })
  create?: BerryFlavorsCreateWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsCreateOrConnectWithoutBerryInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorsCreateOrConnectWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput], {
    nullable: true
  })
  upsert?: BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateManyBerryInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorsCreateManyBerryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  set?: BerryFlavorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BerryFlavorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  delete?: BerryFlavorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryFlavorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput], {
    nullable: true
  })
  update?: BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsUpdateManyWithWhereWithoutBerryInput], {
    nullable: true
  })
  updateMany?: BerryFlavorsUpdateManyWithWhereWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerryFlavorsScalarWhereInput[] | undefined;
}
