import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutFlagMapInput } from "../inputs/MovesUpdateWithoutFlagMapInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutFlagMapInput", {})
export class MovesUpdateToOneWithWhereWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutFlagMapInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutFlagMapInput;
}
