import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateWithoutFirmnessInput } from "../inputs/BerriesCreateWithoutFirmnessInput";
import { BerriesUpdateWithoutFirmnessInput } from "../inputs/BerriesUpdateWithoutFirmnessInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesUpsertWithWhereUniqueWithoutFirmnessInput", {})
export class BerriesUpsertWithWhereUniqueWithoutFirmnessInput {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerriesUpdateWithoutFirmnessInput, {
    nullable: false
  })
  update!: BerriesUpdateWithoutFirmnessInput;

  @TypeGraphQL.Field(_type => BerriesCreateWithoutFirmnessInput, {
    nullable: false
  })
  create!: BerriesCreateWithoutFirmnessInput;
}
