import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateManyFirmnessInputEnvelope } from "../inputs/BerriesCreateManyFirmnessInputEnvelope";
import { BerriesCreateOrConnectWithoutFirmnessInput } from "../inputs/BerriesCreateOrConnectWithoutFirmnessInput";
import { BerriesCreateWithoutFirmnessInput } from "../inputs/BerriesCreateWithoutFirmnessInput";
import { BerriesScalarWhereInput } from "../inputs/BerriesScalarWhereInput";
import { BerriesUpdateManyWithWhereWithoutFirmnessInput } from "../inputs/BerriesUpdateManyWithWhereWithoutFirmnessInput";
import { BerriesUpdateWithWhereUniqueWithoutFirmnessInput } from "../inputs/BerriesUpdateWithWhereUniqueWithoutFirmnessInput";
import { BerriesUpsertWithWhereUniqueWithoutFirmnessInput } from "../inputs/BerriesUpsertWithWhereUniqueWithoutFirmnessInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesUpdateManyWithoutFirmnessNestedInput", {})
export class BerriesUpdateManyWithoutFirmnessNestedInput {
  @TypeGraphQL.Field(_type => [BerriesCreateWithoutFirmnessInput], {
    nullable: true
  })
  create?: BerriesCreateWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesCreateOrConnectWithoutFirmnessInput], {
    nullable: true
  })
  connectOrCreate?: BerriesCreateOrConnectWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesUpsertWithWhereUniqueWithoutFirmnessInput], {
    nullable: true
  })
  upsert?: BerriesUpsertWithWhereUniqueWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateManyFirmnessInputEnvelope, {
    nullable: true
  })
  createMany?: BerriesCreateManyFirmnessInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  set?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  delete?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  connect?: BerriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesUpdateWithWhereUniqueWithoutFirmnessInput], {
    nullable: true
  })
  update?: BerriesUpdateWithWhereUniqueWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesUpdateManyWithWhereWithoutFirmnessInput], {
    nullable: true
  })
  updateMany?: BerriesUpdateManyWithWhereWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerriesScalarWhereInput[] | undefined;
}
