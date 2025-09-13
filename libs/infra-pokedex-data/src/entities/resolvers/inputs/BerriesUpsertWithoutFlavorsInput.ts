import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateWithoutFlavorsInput } from "../inputs/BerriesCreateWithoutFlavorsInput";
import { BerriesUpdateWithoutFlavorsInput } from "../inputs/BerriesUpdateWithoutFlavorsInput";
import { BerriesWhereInput } from "../inputs/BerriesWhereInput";

@TypeGraphQL.InputType("BerriesUpsertWithoutFlavorsInput", {})
export class BerriesUpsertWithoutFlavorsInput {
  @TypeGraphQL.Field(_type => BerriesUpdateWithoutFlavorsInput, {
    nullable: false
  })
  update!: BerriesUpdateWithoutFlavorsInput;

  @TypeGraphQL.Field(_type => BerriesCreateWithoutFlavorsInput, {
    nullable: false
  })
  create!: BerriesCreateWithoutFlavorsInput;

  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  where?: BerriesWhereInput | undefined;
}
