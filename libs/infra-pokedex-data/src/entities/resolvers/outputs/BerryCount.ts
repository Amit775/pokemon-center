import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCountFlavorsArgs } from "./args/BerryCountFlavorsArgs";

@TypeGraphQL.ObjectType("BerryCount", {})
export class BerryCount {
  flavors!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flavors",
    nullable: false
  })
  getFlavors(@TypeGraphQL.Root() root: BerryCount, @TypeGraphQL.Args() args: BerryCountFlavorsArgs): number {
    return root.flavors;
  }
}
