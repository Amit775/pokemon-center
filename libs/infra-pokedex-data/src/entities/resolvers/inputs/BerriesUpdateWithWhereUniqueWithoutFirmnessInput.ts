import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesUpdateWithoutFirmnessInput } from "../inputs/BerriesUpdateWithoutFirmnessInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesUpdateWithWhereUniqueWithoutFirmnessInput", {})
export class BerriesUpdateWithWhereUniqueWithoutFirmnessInput {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerriesUpdateWithoutFirmnessInput, {
    nullable: false
  })
  data!: BerriesUpdateWithoutFirmnessInput;
}
