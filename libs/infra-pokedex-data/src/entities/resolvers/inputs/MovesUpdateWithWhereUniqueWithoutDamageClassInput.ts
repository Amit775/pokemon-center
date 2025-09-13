import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutDamageClassInput } from "../inputs/MovesUpdateWithoutDamageClassInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateWithWhereUniqueWithoutDamageClassInput", {})
export class MovesUpdateWithWhereUniqueWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutDamageClassInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutDamageClassInput;
}
