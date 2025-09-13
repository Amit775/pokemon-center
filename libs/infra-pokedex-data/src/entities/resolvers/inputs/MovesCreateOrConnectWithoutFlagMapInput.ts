import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutFlagMapInput } from "../inputs/MovesCreateWithoutFlagMapInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutFlagMapInput", {})
export class MovesCreateOrConnectWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutFlagMapInput, {
    nullable: false
  })
  create!: MovesCreateWithoutFlagMapInput;
}
