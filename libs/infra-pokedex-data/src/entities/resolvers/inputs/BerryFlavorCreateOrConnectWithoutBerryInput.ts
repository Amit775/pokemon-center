import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateWithoutBerryInput } from "../inputs/BerryFlavorCreateWithoutBerryInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorCreateOrConnectWithoutBerryInput", {})
export class BerryFlavorCreateOrConnectWithoutBerryInput {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorCreateWithoutBerryInput, {
    nullable: false
  })
  create!: BerryFlavorCreateWithoutBerryInput;
}
