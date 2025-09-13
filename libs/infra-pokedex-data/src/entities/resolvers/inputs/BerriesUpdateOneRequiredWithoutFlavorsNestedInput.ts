import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateOrConnectWithoutFlavorsInput } from "../inputs/BerriesCreateOrConnectWithoutFlavorsInput";
import { BerriesCreateWithoutFlavorsInput } from "../inputs/BerriesCreateWithoutFlavorsInput";
import { BerriesUpdateToOneWithWhereWithoutFlavorsInput } from "../inputs/BerriesUpdateToOneWithWhereWithoutFlavorsInput";
import { BerriesUpsertWithoutFlavorsInput } from "../inputs/BerriesUpsertWithoutFlavorsInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesUpdateOneRequiredWithoutFlavorsNestedInput", {})
export class BerriesUpdateOneRequiredWithoutFlavorsNestedInput {
  @TypeGraphQL.Field(_type => BerriesCreateWithoutFlavorsInput, {
    nullable: true
  })
  create?: BerriesCreateWithoutFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateOrConnectWithoutFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: BerriesCreateOrConnectWithoutFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => BerriesUpsertWithoutFlavorsInput, {
    nullable: true
  })
  upsert?: BerriesUpsertWithoutFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: true
  })
  connect?: BerriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BerriesUpdateToOneWithWhereWithoutFlavorsInput, {
    nullable: true
  })
  update?: BerriesUpdateToOneWithWhereWithoutFlavorsInput | undefined;
}
