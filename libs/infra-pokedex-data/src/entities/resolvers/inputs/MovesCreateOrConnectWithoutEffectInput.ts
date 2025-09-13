import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutEffectInput } from "../inputs/MovesCreateWithoutEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutEffectInput", {})
export class MovesCreateOrConnectWithoutEffectInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutEffectInput, {
    nullable: false
  })
  create!: MovesCreateWithoutEffectInput;
}
