import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapCreateNestedManyWithoutFlagInput } from "../inputs/MoveFlagMapCreateNestedManyWithoutFlagInput";

@TypeGraphQL.InputType("MoveFlagCreateInput", {})
export class MoveFlagCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateNestedManyWithoutFlagInput, {
    nullable: true
  })
  flagMap?: MoveFlagMapCreateNestedManyWithoutFlagInput | undefined;
}
