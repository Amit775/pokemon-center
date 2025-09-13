import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesUpdateWithoutItemInput } from "../inputs/BerriesUpdateWithoutItemInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesUpdateWithWhereUniqueWithoutItemInput", {})
export class BerriesUpdateWithWhereUniqueWithoutItemInput {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerriesUpdateWithoutItemInput, {
    nullable: false
  })
  data!: BerriesUpdateWithoutItemInput;
}
