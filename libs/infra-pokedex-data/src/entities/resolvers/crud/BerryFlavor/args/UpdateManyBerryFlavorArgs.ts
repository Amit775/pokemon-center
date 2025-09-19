import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorUpdateManyMutationInput } from "../../../inputs/BerryFlavorUpdateManyMutationInput";
import { BerryFlavorWhereInput } from "../../../inputs/BerryFlavorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBerryFlavorArgs {
  @TypeGraphQL.Field(_type => BerryFlavorUpdateManyMutationInput, {
    nullable: false
  })
  data!: BerryFlavorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BerryFlavorWhereInput, {
    nullable: true
  })
  where?: BerryFlavorWhereInput | undefined;
}
