import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutDamageClassInput } from "../inputs/MovesCreateWithoutDamageClassInput";
import { MovesUpdateWithoutDamageClassInput } from "../inputs/MovesUpdateWithoutDamageClassInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpsertWithWhereUniqueWithoutDamageClassInput", {})
export class MovesUpsertWithWhereUniqueWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutDamageClassInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutDamageClassInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutDamageClassInput, {
    nullable: false
  })
  create!: MovesCreateWithoutDamageClassInput;
}
