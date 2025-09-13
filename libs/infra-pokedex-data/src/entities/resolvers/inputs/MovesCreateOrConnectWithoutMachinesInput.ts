import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutMachinesInput } from "../inputs/MovesCreateWithoutMachinesInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateOrConnectWithoutMachinesInput", {})
export class MovesCreateOrConnectWithoutMachinesInput {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: MovesCreateWithoutMachinesInput;
}
