import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFirmnessUpdateManyMutationInput } from "../../../inputs/BerryFirmnessUpdateManyMutationInput";
import { BerryFirmnessWhereInput } from "../../../inputs/BerryFirmnessWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBerryFirmnessArgs {
  @TypeGraphQL.Field(_type => BerryFirmnessUpdateManyMutationInput, {
    nullable: false
  })
  data!: BerryFirmnessUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BerryFirmnessWhereInput, {
    nullable: true
  })
  where?: BerryFirmnessWhereInput | undefined;
}
