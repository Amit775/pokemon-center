import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorUpdateWithoutBerryInput } from "../inputs/BerryFlavorUpdateWithoutBerryInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorUpdateWithWhereUniqueWithoutBerryInput", {})
export class BerryFlavorUpdateWithWhereUniqueWithoutBerryInput {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateWithoutBerryInput, {
    nullable: false
  })
  data!: BerryFlavorUpdateWithoutBerryInput;
}
