import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesUpdateWithoutFlavorsInput } from "../inputs/BerriesUpdateWithoutFlavorsInput";
import { BerriesWhereInput } from "../inputs/BerriesWhereInput";

@TypeGraphQL.InputType("BerriesUpdateToOneWithWhereWithoutFlavorsInput", {})
export class BerriesUpdateToOneWithWhereWithoutFlavorsInput {
  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  where?: BerriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerriesUpdateWithoutFlavorsInput, {
    nullable: false
  })
  data!: BerriesUpdateWithoutFlavorsInput;
}
