import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateManyItemInputEnvelope } from "../inputs/BerriesCreateManyItemInputEnvelope";
import { BerriesCreateOrConnectWithoutItemInput } from "../inputs/BerriesCreateOrConnectWithoutItemInput";
import { BerriesCreateWithoutItemInput } from "../inputs/BerriesCreateWithoutItemInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesCreateNestedManyWithoutItemInput", {})
export class BerriesCreateNestedManyWithoutItemInput {
  @TypeGraphQL.Field(_type => [BerriesCreateWithoutItemInput], {
    nullable: true
  })
  create?: BerriesCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: BerriesCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: BerriesCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  connect?: BerriesWhereUniqueInput[] | undefined;
}
